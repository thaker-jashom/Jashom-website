import { DetailLayout } from '../DetailLayout';

export function DevSecOpsPage() {
    return (
        <DetailLayout
            title="DevSecOps"
            description="Secure your software pipeline by integrating security at every stage of development."
            whatWeOffer={[
                "Code security scanning",
                "CI/CD security checks",
                "Policy management",
                "Automated vulnerability checks"
            ]}
            benefits={[
                "Reduce security risks",
                "Improve compliance",
                "Safer deployments"
            ]}
            type="Service"
        />
    );
}
