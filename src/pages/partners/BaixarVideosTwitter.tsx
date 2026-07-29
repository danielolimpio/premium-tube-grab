import PartnerLanding from "../PartnerLanding";
import { partners } from "@/lib/partners";
export default function BaixarVideosTwitter() {
  return <PartnerLanding config={partners.twitter} />;
}
