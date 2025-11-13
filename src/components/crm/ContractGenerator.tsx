import { Tables } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { useRef } from "react";

type Patient = Tables<"patients">;

interface ContractGeneratorProps {
  patient: Patient;
}

const ContractGenerator = ({ patient }: ContractGeneratorProps) => {
  const printRef = useRef<HTMLDivElement>(null);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "________________";
    try {
      return format(new Date(dateString), "dd.MM.yyyy", { locale: pl });
    } catch {
      return "________________";
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
              <title>Umowa - ${patient.first_name} ${patient.last_name}</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  padding: 40px;
                  line-height: 1.6;
                  color: #000;
                }
                h1 {
                  text-align: center;
                  margin-bottom: 30px;
                  font-size: 24px;
                }
                h2 {
                  margin-top: 30px;
                  margin-bottom: 15px;
                  font-size: 18px;
                }
                p {
                  margin-bottom: 15px;
                  text-align: justify;
                }
                .header {
                  text-align: center;
                  margin-bottom: 40px;
                }
                .field {
                  font-weight: bold;
                  border-bottom: 1px dotted #000;
                  display: inline-block;
                  min-width: 150px;
                }
                .signature-section {
                  margin-top: 60px;
                  display: flex;
                  justify-content: space-between;
                }
                .signature-box {
                  text-align: center;
                }
                .signature-line {
                  border-top: 1px solid #000;
                  width: 200px;
                  margin-top: 40px;
                  padding-top: 5px;
                }
                @media print {
                  body {
                    padding: 20px;
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
          Drukuj umowę
        </Button>
      </div>

      <div
        ref={printRef}
        className="bg-white p-8 rounded-lg border border-gray-200"
        style={{ color: "#000" }}
      >
        <div className="header">
          <h1 className="text-2xl font-bold mb-4">
            UMOWA O ŚWIADCZENIE USŁUG TERAPEUTYCZNYCH
          </h1>
          <p className="text-sm">
            Ośrodek Leczenia Uzależnień MyWay
            <br />
            ul. Przykładowa 123, 80-000 Gdańsk
            <br />
            Tel: +48 123 456 789
          </p>
        </div>

        <p className="mb-4">
          <strong>Numer umowy:</strong>{" "}
          <span className="field">
            {patient.contract_number || "________________"}
          </span>
        </p>

        <p className="mb-4">
          <strong>Data zawarcia umowy:</strong>{" "}
          <span className="field">{formatDate(patient.contract_date)}</span>
        </p>

        <h2 className="text-xl font-bold mt-6 mb-4">§ 1. Strony umowy</h2>

        <p>
          <strong>1. Usługodawca:</strong>
          <br />
          Ośrodek Leczenia Uzależnień MyWay
          <br />
          ul. Przykładowa 123, 80-000 Gdańsk
          <br />
          NIP: 123-456-78-90
        </p>

        <p>
          <strong>2. Usługobiorca (Pacjent):</strong>
          <br />
          <span className="field">
            {patient.first_name} {patient.last_name}
          </span>
          <br />
          PESEL: <span className="field">{patient.pesel || "________________"}</span>
          <br />
          Data urodzenia:{" "}
          <span className="field">{formatDate(patient.date_of_birth)}</span>
          <br />
          Adres:{" "}
          <span className="field">
            {patient.street_address || "________________"}
          </span>
          ,{" "}
          <span className="field">
            {patient.postal_code || "__-___"}
          </span>{" "}
          <span className="field">{patient.city || "________________"}</span>
          <br />
          Telefon: <span className="field">{patient.phone || "________________"}</span>
          <br />
          Email: <span className="field">{patient.email || "________________"}</span>
        </p>

        <h2 className="text-xl font-bold mt-6 mb-4">§ 2. Przedmiot umowy</h2>

        <p>
          1. Przedmiotem niniejszej umowy jest świadczenie przez Usługodawcę na rzecz
          Usługobiorcy usług terapeutycznych w zakresie leczenia uzależnień.
        </p>

        <p>
          2. Rodzaj terapii:{" "}
          <span className="field">
            {patient.therapy_type || "________________"}
          </span>
        </p>

        <p>
          3. Data rozpoczęcia terapii:{" "}
          <span className="field">{formatDate(patient.admission_date)}</span>
        </p>

        <h2 className="text-xl font-bold mt-6 mb-4">§ 3. Zakres usług</h2>

        <p>
          1. Usługodawca zobowiązuje się do świadczenia następujących usług:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>Indywidualne sesje terapeutyczne</li>
          <li>Terapia grupowa</li>
          <li>Konsultacje psychologiczne</li>
          <li>Wsparcie w procesie zdrowienia</li>
          <li>Opracowanie indywidualnego planu terapeutycznego</li>
        </ul>

        <p>
          2. Diagnoza:{" "}
          <span className="field">{patient.diagnosis || "________________"}</span>
        </p>

        <h2 className="text-xl font-bold mt-6 mb-4">
          § 4. Kontakt awaryjny
        </h2>

        <p>
          Osoba do kontaktu w nagłych przypadkach:
          <br />
          <span className="field">
            {patient.emergency_contact_name || "________________"}
          </span>
          <br />
          Telefon:{" "}
          <span className="field">
            {patient.emergency_contact_phone || "________________"}
          </span>
          <br />
          Relacja:{" "}
          <span className="field">
            {patient.emergency_contact_relation || "________________"}
          </span>
        </p>

        <h2 className="text-xl font-bold mt-6 mb-4">
          § 5. Obowiązki stron
        </h2>

        <p>
          <strong>1. Usługodawca zobowiązuje się do:</strong>
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>
            Świadczenia usług zgodnie z najlepszą wiedzą i praktyką terapeutyczną
          </li>
          <li>Zachowania poufności informacji o Pacjencie</li>
          <li>Dostosowania terapii do indywidualnych potrzeb Pacjenta</li>
          <li>Regularnego monitorowania postępów w terapii</li>
        </ul>

        <p>
          <strong>2. Usługobiorca zobowiązuje się do:</strong>
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>Regularnego uczestnictwa w zaplanowanych sesjach</li>
          <li>Przestrzegania zaleceń terapeutycznych</li>
          <li>Informowania o wszelkich zmianach w stanie zdrowia</li>
          <li>
            Terminowego regulowania płatności zgodnie z cennikiem usług
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-6 mb-4">
          § 6. Warunki rozwiązania umowy
        </h2>

        <p>
          1. Umowa może zostać rozwiązana przez każdą ze stron z zachowaniem
          7-dniowego okresu wypowiedzenia.
        </p>

        <p>
          2. Usługodawca może rozwiązać umowę ze skutkiem natychmiastowym w przypadku
          rażącego naruszenia regulaminu ośrodka przez Pacjenta.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-4">
          § 7. Ochrona danych osobowych
        </h2>

        <p>
          Usługodawca przetwarza dane osobowe Pacjenta zgodnie z przepisami RODO w
          celu realizacji niniejszej umowy oraz świadczenia usług medycznych.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-4">§ 8. Postanowienia końcowe</h2>

        <p>
          1. W sprawach nieuregulowanych niniejszą umową zastosowanie mają przepisy
          Kodeksu cywilnego.
        </p>

        <p>
          2. Umowę sporządzono w dwóch jednobrzmiących egzemplarzach, po jednym dla
          każdej ze stron.
        </p>

        <div className="signature-section">
          <div className="signature-box">
            <div className="signature-line">
              Podpis Usługodawcy
              <br />
              (Ośrodek MyWay)
            </div>
          </div>
          <div className="signature-box">
            <div className="signature-line">
              Podpis Usługobiorcy
              <br />({patient.first_name} {patient.last_name})
            </div>
          </div>
        </div>

        {patient.notes && (
          <div className="mt-8 p-4 bg-gray-50 rounded">
            <h3 className="font-bold mb-2">Dodatkowe informacje:</h3>
            <p className="text-sm whitespace-pre-wrap">{patient.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContractGenerator;
