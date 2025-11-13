import { Tables } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { useRef } from "react";

type Patient = Tables<"patients">;

interface PatientCardGeneratorProps {
  patient: Patient;
}

const PatientCardGenerator = ({ patient }: PatientCardGeneratorProps) => {
  const printRef = useRef<HTMLDivElement>(null);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "-";
    try {
      return format(new Date(dateString), "dd.MM.yyyy", { locale: pl });
    } catch {
      return "-";
    }
  };

  const handlePrint = () => {
    if (printRef.current) {
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Karta Pacjenta - ${patient.first_name} ${patient.last_name}</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  padding: 40px;
                  color: #000;
                }
                .card-header {
                  text-align: center;
                  border-bottom: 3px solid #000;
                  padding-bottom: 20px;
                  margin-bottom: 30px;
                }
                h1 {
                  font-size: 28px;
                  margin-bottom: 10px;
                }
                .patient-name {
                  font-size: 24px;
                  font-weight: bold;
                  color: #2563eb;
                  margin-top: 10px;
                }
                .section {
                  margin-bottom: 25px;
                  border: 1px solid #e5e7eb;
                  padding: 15px;
                  border-radius: 8px;
                }
                .section-title {
                  font-size: 18px;
                  font-weight: bold;
                  color: #1f2937;
                  margin-bottom: 12px;
                  border-bottom: 2px solid #e5e7eb;
                  padding-bottom: 5px;
                }
                .info-grid {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 15px;
                }
                .info-item {
                  margin-bottom: 8px;
                }
                .info-label {
                  font-weight: bold;
                  color: #4b5563;
                  font-size: 13px;
                }
                .info-value {
                  color: #000;
                  font-size: 15px;
                  margin-top: 2px;
                }
                .full-width {
                  grid-column: 1 / -1;
                }
                .notes-section {
                  background-color: #f9fafb;
                  padding: 15px;
                  border-radius: 8px;
                  white-space: pre-wrap;
                  font-size: 14px;
                  line-height: 1.6;
                }
                @media print {
                  body {
                    padding: 20px;
                  }
                  .section {
                    page-break-inside: avoid;
                  }
                }
              </style>
            </head>
            <body>
              ${printRef.current.innerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
        }, 250);
      }
    }
  };

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <Button onClick={handlePrint} className="bg-blue-600 hover:bg-blue-700">
          <Printer className="mr-2 h-4 w-4" />
          Drukuj kartę pacjenta
        </Button>
      </div>

      <div
        ref={printRef}
        className="bg-white p-8 rounded-lg border border-gray-200"
        style={{ color: "#000" }}
      >
        <div className="card-header">
          <h1>KARTA PACJENTA</h1>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Ośrodek Leczenia Uzależnień MyWay
            <br />
            ul. Przykładowa 123, 80-000 Gdańsk | Tel: +48 123 456 789
          </p>
          <div className="patient-name">
            {patient.first_name} {patient.last_name}
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="section">
          <div className="section-title">Dane osobowe</div>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-label">Imię</div>
              <div className="info-value">{patient.first_name}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Nazwisko</div>
              <div className="info-value">{patient.last_name}</div>
            </div>
            <div className="info-item">
              <div className="info-label">PESEL</div>
              <div className="info-value">{patient.pesel || "-"}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Data urodzenia</div>
              <div className="info-value">{formatDate(patient.date_of_birth)}</div>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="section">
          <div className="section-title">Dane kontaktowe</div>
          <div className="info-grid">
            <div className="info-item full-width">
              <div className="info-label">Adres</div>
              <div className="info-value">
                {patient.street_address || "-"}
                {patient.street_address && patient.city && ", "}
                {patient.postal_code && `${patient.postal_code} `}
                {patient.city}
              </div>
            </div>
            <div className="info-item">
              <div className="info-label">Telefon</div>
              <div className="info-value">{patient.phone || "-"}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Email</div>
              <div className="info-value">{patient.email || "-"}</div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="section">
          <div className="section-title">Kontakt awaryjny</div>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-label">Osoba kontaktowa</div>
              <div className="info-value">
                {patient.emergency_contact_name || "-"}
              </div>
            </div>
            <div className="info-item">
              <div className="info-label">Relacja</div>
              <div className="info-value">
                {patient.emergency_contact_relation || "-"}
              </div>
            </div>
            <div className="info-item full-width">
              <div className="info-label">Telefon kontaktowy</div>
              <div className="info-value">
                {patient.emergency_contact_phone || "-"}
              </div>
            </div>
          </div>
        </div>

        {/* Medical Information Section */}
        <div className="section">
          <div className="section-title">Informacje medyczne i terapeutyczne</div>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-label">Rodzaj terapii</div>
              <div className="info-value">{patient.therapy_type || "-"}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Data przyjęcia</div>
              <div className="info-value">{formatDate(patient.admission_date)}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Data wypisu</div>
              <div className="info-value">{formatDate(patient.discharge_date)}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Numer umowy</div>
              <div className="info-value">{patient.contract_number || "-"}</div>
            </div>
            <div className="info-item full-width">
              <div className="info-label">Diagnoza</div>
              <div className="info-value">
                {patient.diagnosis || "-"}
              </div>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        {patient.notes && (
          <div className="section">
            <div className="section-title">Dodatkowe informacje</div>
            <div className="notes-section">{patient.notes}</div>
          </div>
        )}

        {/* Administrative Information */}
        <div className="section" style={{ marginTop: "30px" }}>
          <div className="section-title">Informacje administracyjne</div>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-label">Data utworzenia karty</div>
              <div className="info-value">{formatDate(patient.created_at)}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Ostatnia aktualizacja</div>
              <div className="info-value">{formatDate(patient.updated_at)}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Data umowy</div>
              <div className="info-value">{formatDate(patient.contract_date)}</div>
            </div>
            <div className="info-item">
              <div className="info-label">ID pacjenta</div>
              <div className="info-value" style={{ fontSize: "11px" }}>
                {patient.id}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: "40px",
          paddingTop: "20px",
          borderTop: "1px solid #e5e7eb",
          textAlign: "center",
          fontSize: "12px",
          color: "#6b7280"
        }}>
          Dokument poufny - zawiera informacje chronione prawem o ochronie danych osobowych
          <br />
          Wygenerowano: {format(new Date(), "dd.MM.yyyy HH:mm", { locale: pl })}
        </div>
      </div>
    </div>
  );
};

export default PatientCardGenerator;
