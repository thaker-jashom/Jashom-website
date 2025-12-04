import { DetailLayout } from '../DetailLayout';

export function FinTechPage() {
    return (
        <DetailLayout
            title="FinTech Solutions"
            description="Modern financial platforms built with security and scalability."
            whatWeOffer={[
                "Payment systems",
                "Fraud detection",
                "Financial dashboards"
            ]}
            benefits={[
                "Payment systems",
                "Fraud detection",
                "Financial dashboards"
            ]}
            benefitsTitle="We Solve"
            type="Solution"
        />
    );
}
