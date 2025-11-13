import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tables } from "@/integrations/supabase/types";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

type Patient = Tables<"patients">;

const patientSchema = z.object({
  first_name: z.string().min(2, "Imię musi mieć co najmniej 2 znaki"),
  last_name: z.string().min(2, "Nazwisko musi mieć co najmniej 2 znaki"),
  pesel: z.string().length(11, "PESEL musi mieć 11 cyfr").optional().or(z.literal("")),
  date_of_birth: z.string().optional(),
  street_address: z.string().optional(),
  city: z.string().optional(),
  postal_code: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email("Nieprawidłowy adres email").optional().or(z.literal("")),
  emergency_contact_name: z.string().optional(),
  emergency_contact_phone: z.string().optional(),
  emergency_contact_relation: z.string().optional(),
  diagnosis: z.string().optional(),
  therapy_type: z.string().optional(),
  admission_date: z.string().optional(),
  discharge_date: z.string().optional(),
  notes: z.string().optional(),
  contract_number: z.string().optional(),
  contract_date: z.string().optional(),
});

type PatientFormData = z.infer<typeof patientSchema>;

interface PatientFormProps {
  patient: Patient | null;
  onSuccess: () => void;
  onCancel: () => void;
}

const PatientForm = ({ patient, onSuccess, onCancel }: PatientFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PatientFormData>({
    resolver: zodResolver(patientSchema),
    defaultValues: patient
      ? {
          first_name: patient.first_name,
          last_name: patient.last_name,
          pesel: patient.pesel || "",
          date_of_birth: patient.date_of_birth || "",
          street_address: patient.street_address || "",
          city: patient.city || "",
          postal_code: patient.postal_code || "",
          phone: patient.phone || "",
          email: patient.email || "",
          emergency_contact_name: patient.emergency_contact_name || "",
          emergency_contact_phone: patient.emergency_contact_phone || "",
          emergency_contact_relation: patient.emergency_contact_relation || "",
          diagnosis: patient.diagnosis || "",
          therapy_type: patient.therapy_type || "",
          admission_date: patient.admission_date || "",
          discharge_date: patient.discharge_date || "",
          notes: patient.notes || "",
          contract_number: patient.contract_number || "",
          contract_date: patient.contract_date || "",
        }
      : undefined,
  });

  const onSubmit = async (data: PatientFormData) => {
    try {
      // Convert empty strings to null for optional fields
      const cleanedData = Object.fromEntries(
        Object.entries(data).map(([key, value]) => [
          key,
          value === "" ? null : value,
        ])
      );

      if (patient) {
        // Update existing patient
        const { error } = await supabase
          .from("patients")
          .update(cleanedData)
          .eq("id", patient.id);

        if (error) throw error;
        toast.success("Pacjent został zaktualizowany");
      } else {
        // Insert new patient
        const { error } = await supabase.from("patients").insert(cleanedData);

        if (error) throw error;
        toast.success("Pacjent został dodany");
      }

      onSuccess();
    } catch (error) {
      console.error("Error saving patient:", error);
      toast.error("Wystąpił błąd podczas zapisywania pacjenta");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Dane osobowe
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="first_name">Imię *</Label>
            <Input
              id="first_name"
              {...register("first_name")}
              className={errors.first_name ? "border-red-500" : ""}
            />
            {errors.first_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.first_name.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="last_name">Nazwisko *</Label>
            <Input
              id="last_name"
              {...register("last_name")}
              className={errors.last_name ? "border-red-500" : ""}
            />
            {errors.last_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.last_name.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="pesel">PESEL</Label>
            <Input
              id="pesel"
              {...register("pesel")}
              maxLength={11}
              className={errors.pesel ? "border-red-500" : ""}
            />
            {errors.pesel && (
              <p className="text-red-500 text-sm mt-1">
                {errors.pesel.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="date_of_birth">Data urodzenia</Label>
            <Input
              id="date_of_birth"
              type="date"
              {...register("date_of_birth")}
            />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Dane kontaktowe
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <Label htmlFor="street_address">Adres</Label>
            <Input id="street_address" {...register("street_address")} />
          </div>

          <div>
            <Label htmlFor="city">Miasto</Label>
            <Input id="city" {...register("city")} />
          </div>

          <div>
            <Label htmlFor="postal_code">Kod pocztowy</Label>
            <Input id="postal_code" {...register("postal_code")} />
          </div>

          <div>
            <Label htmlFor="phone">Telefon</Label>
            <Input id="phone" type="tel" {...register("phone")} />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Kontakt awaryjny
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="emergency_contact_name">Imię i nazwisko</Label>
            <Input
              id="emergency_contact_name"
              {...register("emergency_contact_name")}
            />
          </div>

          <div>
            <Label htmlFor="emergency_contact_phone">Telefon</Label>
            <Input
              id="emergency_contact_phone"
              type="tel"
              {...register("emergency_contact_phone")}
            />
          </div>

          <div>
            <Label htmlFor="emergency_contact_relation">Relacja</Label>
            <Input
              id="emergency_contact_relation"
              {...register("emergency_contact_relation")}
              placeholder="np. Matka, Brat"
            />
          </div>
        </div>
      </div>

      {/* Medical Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Informacje medyczne
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="therapy_type">Rodzaj terapii</Label>
            <Input
              id="therapy_type"
              {...register("therapy_type")}
              placeholder="np. Ambulatoryjna, Stacjonarna"
            />
          </div>

          <div>
            <Label htmlFor="admission_date">Data przyjęcia</Label>
            <Input
              id="admission_date"
              type="date"
              {...register("admission_date")}
            />
          </div>

          <div>
            <Label htmlFor="contract_number">Numer umowy</Label>
            <Input
              id="contract_number"
              {...register("contract_number")}
            />
          </div>

          <div>
            <Label htmlFor="contract_date">Data umowy</Label>
            <Input
              id="contract_date"
              type="date"
              {...register("contract_date")}
            />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="diagnosis">Diagnoza</Label>
            <Textarea
              id="diagnosis"
              {...register("diagnosis")}
              rows={3}
              placeholder="Opis diagnozy medycznej..."
            />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="notes">Notatki</Label>
            <Textarea
              id="notes"
              {...register("notes")}
              rows={4}
              placeholder="Dodatkowe informacje o pacjencie..."
            />
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end gap-3 pt-4 border-t">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Anuluj
        </Button>
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700"
          disabled={isSubmitting}
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {patient ? "Zapisz zmiany" : "Dodaj pacjenta"}
        </Button>
      </div>
    </form>
  );
};

export default PatientForm;
