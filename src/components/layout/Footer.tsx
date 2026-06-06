import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="lg:col-span-2">
            <Image
              src="/logos/logo-logidental.png"
              alt="Logidental"
              width={160}
              height={54}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Services dédiés à la médecine Bucco-Dentaire depuis 2014. Interlocuteur unique pour la conception et
              réalisation complète de cabinets dentaires clés en main.
            </p>
          </div>

          {/* Coordonnées */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span>56 rue Cassiopée<br />34570 Vailhauquès</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="tel:+33467920605" className="hover:text-white transition-colors">
                  04 67 92 06 05
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span>Lun–Ven 9h–12h / 14h–18h</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/nos-solutions" className="hover:text-white transition-colors">Nos Solutions</Link></li>
              <li><Link href="/racines-couronnes" className="hover:text-white transition-colors">Racines & Couronnes</Link></li>
              <li><Link href="/services-a-la-carte" className="hover:text-white transition-colors">Services à la carte</Link></li>
              <li><Link href="/racines-couronnes/le-label" className="hover:text-white transition-colors">Le Label R&C</Link></li>
              <li><Link href="/nos-realisations" className="hover:text-white transition-colors">Nos Réalisations</Link></li>
              <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact / Devis</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Logidental SAS — Tous droits réservés</p>
          <div className="flex items-center gap-4">
            <Link href="/confidentialite" className="hover:text-gray-300 transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/mentions-legales" className="hover:text-gray-300 transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
