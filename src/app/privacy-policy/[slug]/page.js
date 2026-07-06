import { notFound } from "next/navigation";
import PrivacyPolicyRenderer from "@/components/privacy-policy/PrivacyPolicyRenderer";
import { getPrivacyPolicy, privacyPolicyList } from "@/lib/privacy-policies";

export function generateStaticParams() {
  return privacyPolicyList.map((policy) => ({
    slug: policy.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const policy = getPrivacyPolicy(slug);

  if (!policy) {
    return {
      title: "Privacy Policy | Eraflip Tech",
    };
  }

  return {
    title: `${policy.title} | Eraflip Tech`,
    description: policy.metaDescription,
  };
}

export default async function PrivacyPolicyPage({ params }) {
  const { slug } = await params;
  const policy = getPrivacyPolicy(slug);

  if (!policy) {
    notFound();
  }

  return <PrivacyPolicyRenderer policy={policy} />;
}
