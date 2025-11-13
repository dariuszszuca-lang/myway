import { Tables } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { MoreVertical, FileText, UserCircle, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { format } from "date-fns";
import { pl } from "date-fns/locale";

type Patient = Tables<"patients">;

interface PatientListProps {
  patients: Patient[];
  onEdit: (patient: Patient) => void;
  onGenerateContract: (patient: Patient) => void;
  onGenerateCard: (patient: Patient) => void;
  onRefetch: () => void;
}

const PatientList = ({
  patients,
  onEdit,
  onGenerateContract,
  onGenerateCard,
  onRefetch,
}: PatientListProps) => {
  const [patientToDelete, setPatientToDelete] = useState<Patient | null>(null);

  const handleDelete = async (patient: Patient) => {
    try {
      const { error } = await supabase
        .from("patients")
        .delete()
        .eq("id", patient.id);

      if (error) throw error;

      toast.success("Pacjent został usunięty");
      setPatientToDelete(null);
      onRefetch();
    } catch (error) {
      console.error("Error deleting patient:", error);
      toast.error("Wystąpił błąd podczas usuwania pacjenta");
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "-";
    try {
      return format(new Date(dateString), "dd.MM.yyyy", { locale: pl });
    } catch {
      return "-";
    }
  };

  if (patients.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-12 text-center">
        <UserCircle className="mx-auto h-16 w-16 text-gray-400 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Brak pacjentów
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Dodaj pierwszego pacjenta, aby rozpocząć pracę z systemem CRM
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Imię i nazwisko</TableHead>
              <TableHead>PESEL</TableHead>
              <TableHead>Telefon</TableHead>
              <TableHead>Rodzaj terapii</TableHead>
              <TableHead>Data przyjęcia</TableHead>
              <TableHead className="text-right">Akcje</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">
                  {patient.first_name} {patient.last_name}
                </TableCell>
                <TableCell>{patient.pesel || "-"}</TableCell>
                <TableCell>{patient.phone || "-"}</TableCell>
                <TableCell>{patient.therapy_type || "-"}</TableCell>
                <TableCell>{formatDate(patient.admission_date)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onEdit(patient)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edytuj
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => onGenerateContract(patient)}
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        Generuj umowę
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => onGenerateCard(patient)}>
                        <UserCircle className="mr-2 h-4 w-4" />
                        Generuj kartę pacjenta
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setPatientToDelete(patient)}
                        className="text-red-600"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Usuń
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={!!patientToDelete}
        onOpenChange={() => setPatientToDelete(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Czy na pewno chcesz usunąć?</AlertDialogTitle>
            <AlertDialogDescription>
              Ta akcja jest nieodwracalna. Pacjent{" "}
              <strong>
                {patientToDelete?.first_name} {patientToDelete?.last_name}
              </strong>{" "}
              zostanie trwale usunięty z systemu.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Anuluj</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => patientToDelete && handleDelete(patientToDelete)}
              className="bg-red-600 hover:bg-red-700"
            >
              Usuń
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default PatientList;
