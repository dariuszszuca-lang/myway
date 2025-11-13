import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Plus, FileText, UserCircle } from "lucide-react";
import { Tables } from "@/integrations/supabase/types";
import PatientForm from "@/components/crm/PatientForm";
import PatientList from "@/components/crm/PatientList";
import ContractGenerator from "@/components/crm/ContractGenerator";
import PatientCardGenerator from "@/components/crm/PatientCardGenerator";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

type Patient = Tables<"patients">;

const CRM = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isContractOpen, setIsContractOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);

  const { data: patients, isLoading, refetch } = useQuery({
    queryKey: ["patients"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("patients")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        toast.error("Błąd podczas pobierania pacjentów");
        throw error;
      }

      return data as Patient[];
    },
  });

  const handleAddPatient = () => {
    setSelectedPatient(null);
    setIsFormOpen(true);
  };

  const handleEditPatient = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsFormOpen(true);
  };

  const handleGenerateContract = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsContractOpen(true);
  };

  const handleGenerateCard = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsCardOpen(true);
  };

  const handleFormSuccess = () => {
    setIsFormOpen(false);
    setSelectedPatient(null);
    refetch();
    toast.success("Pacjent został zapisany pomyślnie");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              System CRM - MyWay
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Zarządzanie pacjentami ośrodka leczenia uzależnień
            </p>
          </div>
          <Button
            onClick={handleAddPatient}
            className="bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            <Plus className="mr-2 h-5 w-5" />
            Dodaj Pacjenta
          </Button>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">Ładowanie...</p>
          </div>
        ) : (
          <PatientList
            patients={patients || []}
            onEdit={handleEditPatient}
            onGenerateContract={handleGenerateContract}
            onGenerateCard={handleGenerateCard}
            onRefetch={refetch}
          />
        )}

        {/* Patient Form Dialog */}
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {selectedPatient ? "Edytuj Pacjenta" : "Dodaj Nowego Pacjenta"}
              </DialogTitle>
            </DialogHeader>
            <PatientForm
              patient={selectedPatient}
              onSuccess={handleFormSuccess}
              onCancel={() => setIsFormOpen(false)}
            />
          </DialogContent>
        </Dialog>

        {/* Contract Generator Dialog */}
        <Dialog open={isContractOpen} onOpenChange={setIsContractOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Umowa - {selectedPatient?.first_name} {selectedPatient?.last_name}
              </DialogTitle>
            </DialogHeader>
            {selectedPatient && (
              <ContractGenerator patient={selectedPatient} />
            )}
          </DialogContent>
        </Dialog>

        {/* Patient Card Generator Dialog */}
        <Dialog open={isCardOpen} onOpenChange={setIsCardOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <UserCircle className="h-5 w-5" />
                Karta Pacjenta - {selectedPatient?.first_name} {selectedPatient?.last_name}
              </DialogTitle>
            </DialogHeader>
            {selectedPatient && (
              <PatientCardGenerator patient={selectedPatient} />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CRM;
