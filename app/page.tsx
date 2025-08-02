import BusinessProcessCard from "@/components/businessprocesscard";
import CloudInfrustructureCard from "@/components/cloudinfrustructurecard";
import ContactFormCard from "@/components/contactformcard";
import ContactForm from "@/components/contactformcard";
import DigitizationCard from "@/components/digitizationcard";
import IntelligentDocumentProcessingCard from "@/components/intelligentdocumentprocessingcard";
import MainCard from "@/components/maincard";

export default function Home() {
  return (
    <div>
      <div>
        <MainCard />
      </div>
      <div>
        <DigitizationCard />
      </div>
      <div>
        <CloudInfrustructureCard />
      </div>
      <div>
        <BusinessProcessCard />
      </div>
      <div>
        <IntelligentDocumentProcessingCard />
      </div>
      <div>
        <ContactFormCard />
      </div>
    </div>
  );
}
