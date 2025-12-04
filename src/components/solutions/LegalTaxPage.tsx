import { DetailLayout } from '../DetailLayout';

export function LegalTaxPage() {
    return (
        <DetailLayout
            title="Legal & Tax Solutions"
            description="AI-powered tools that simplify legal and tax workflows."
            whatWeOffer={[
                "Document automation",
                "Legal RAG systems",
                "Compliance workflows"
            ]}
            benefits={[
                "Document automation",
                "Legal RAG systems",
                "Compliance workflows"
            ]}
            benefitsTitle="We Solve"
            type="Solution"
        />
    );
}
