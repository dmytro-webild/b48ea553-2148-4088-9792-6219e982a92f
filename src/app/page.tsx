"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import { MessageCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="medium"
        background="blurBottom"
        cardStyle="inset"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
            <NavbarStyleCentered
            navItems={[
              { name: "Home", id: "hero" },
              { name: "Signature", id: "signature" },
              { name: "Menu", id: "menu" },
              { name: "Kontakt", id: "contact" },
            ]}
            brandName="Zen Fusion"
          />
        </div>

        <div id="hero" data-section="hero">
            <HeroCentered
            background={{ variant: "radial-gradient" }}
            title="Eksperienca Supreme e Sushi-t"
            description="Shijoni kombinimet më të mira të Asian Fusion në një ambient modern dhe relaksues."
            avatars={[
              { src: "http://img.b2bpic.net/free-photo/fingers-with-blood_24837-431.jpg", alt: "Sushi Art" },
              { src: "http://img.b2bpic.net/free-photo/sushi-rolls-with-chopsticks-slate_23-2148461682.jpg", alt: "Sushi rolls with chopsticks on slate" },
              { src: "http://img.b2bpic.net/free-photo/cream-cheese-sushi-rolls-with-ginger-leaf_114579-1107.jpg", alt: "Cream cheese sushi rolls with ginger on a leaf" },
              { src: "http://img.b2bpic.net/free-photo/high-angle-sushi-rolls-slate-with-copy-space_23-2148461745.jpg", alt: "High angle of sushi rolls on slate with copy space" },
              { src: "http://img.b2bpic.net/free-photo/top-view-sushi-roll-slate_23-2148461763.jpg", alt: "Top view of sushi roll on slate" },
            ]}
            buttons={[
              { text: "Rezervo Tavolinën", href: "#contact" },
              { text: "Porosit Online", href: "#menu" },
            ]}
            marqueeItems={[
              { type: "text", text: "Përbërës Premium" },
              { type: "text", text: "Ambient Modern" },
              { type: "text", text: "Kuzhinierë Master" },
              { type: "text", text: "Porosi në Shtëpi" },
              { type: "text", text: "Përvoja Zen" },
            ]}
          />
        </div>

        <div id="signature" data-section="signature">
            <FeatureCardSix
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              { title: "Dragon Roll", description: "Tempura karkalec, avokado dhe salcë unagi.", imageSrc: "http://img.b2bpic.net/free-photo/three-sushi-rolls-table_23-2148505610.jpg", imageAlt: "Dragon Roll" },
              { title: "Rainbow Roll", description: "Peshk i freskët i zgjedhur dhe perime sezonale.", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-delicious-sushi-sushi-delivery-advertising-sushi-rolls-made-fish-cheese_132075-14433.jpg", imageAlt: "Rainbow Roll" },
              { title: "Volcano Roll", description: "Salcë pikante, gaforre dhe topa tempura.", imageSrc: "http://img.b2bpic.net/free-photo/top-view-sushi-roll-with-crab-avocado-covered-with-red-caviar-with-ginger-wasabi-plate_141793-11683.jpg", imageAlt: "Volcano Roll" },
            ]}
            title="Signature Rolls"
            description="Krijimet tona më të veçanta, përgatitur me përbërës të freskët dhe teknikë artizanale."
          />
        </div>

        <div id="gallery" data-section="gallery">
            <TeamCardFive
            textboxLayout="default"
            useInvertedBackground={false}
            animationType="slide-up"
            team={[
              { id: "img1", name: "Salla Kryesore", role: "Ambienti", imageSrc: "http://img.b2bpic.net/free-photo/sugared-peers-table_140725-4083.jpg" },
              { id: "img2", name: "Zona Lounge", role: "Relaks", imageSrc: "http://img.b2bpic.net/free-photo/part-home-kitchen-table-setting-with-gray-plates-bouquet-vase_169016-15228.jpg" },
              { id: "img3", name: "Sushi Bar", role: "Kreativiteti", imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-professional-chef-wear-black-gloves-making-sushi-rolls-restaurant-kitchen-japanese-traditional-food_627829-6726.jpg" },
            ]}
            title="Ambient Modern"
            description="Një hapësirë e qetë dhe minimalist për një drekë apo darkë të paharrueshme."
          />
        </div>

        <div id="menu" data-section="menu">
            <ProductCardThree
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={false}
            products={[
              { id: "p1", name: "Sushi Set", price: "2500 Lek", imageSrc: "http://img.b2bpic.net/free-photo/view-raw-fish-plate_23-2148862986.jpg" },
              { id: "p2", name: "Sashimi Mix", price: "3200 Lek", imageSrc: "http://img.b2bpic.net/free-photo/salmon-raw-sashimi_1339-3844.jpg" },
              { id: "p3", name: "Ramen Tonkotsu", price: "1800 Lek", imageSrc: "http://img.b2bpic.net/free-photo/still-life-colorful-ramen-dish_23-2151874102.jpg" },
              { id: "p4", name: "Fusion Cocktails", price: "900 Lek", imageSrc: "http://img.b2bpic.net/free-photo/man-garnished-glass-cocktail-with-green-decorations_140725-8740.jpg" },
              { id: "p5", name: "Vegetarian Rolls", price: "1200 Lek", imageSrc: "http://img.b2bpic.net/free-photo/rolls-with-soy-sauce-inside-blue-plate_114579-3241.jpg" },
              { id: "p6", name: "Tempura Ebi", price: "1500 Lek", imageSrc: "http://img.b2bpic.net/free-photo/top-view-classic-japanese-sushi-with-red-caviar-bamboo-leaf-served-with-ginger-wasabi-sauce-plate_141793-11791.jpg" },
            ]}
            title="Menuja Digjitale"
            description="Zgjidhni nga gamë e gjerë e pjatave tona të kuruara me kujdes."
          />
        </div>

        <div id="faq" data-section="faq">
            <FaqDouble
            textboxLayout="default"
            useInvertedBackground={false}
            faqs={[
              { id: "f1", title: "A keni opsione vegane?", content: "Po, menuja jonë përfshin një gamë të gjerë të pjatave vegjetariane dhe vegane." },
              { id: "f2", title: "Si mund të porosis?", content: "Mund të porosisni direkt përmes faqes sonë ose duke na shkruar në WhatsApp." },
              { id: "f3", title: "A bëni dërgesa në shtëpi?", content: "Po, ne ofrojmë dërgesë në të gjithë zonën e Tiranës." },
            ]}
            title="Pyetje të Shpeshta"
            description="Gjithçka që duhet të dini për shërbimet tona."
            faqsAnimation="slide-up"
          />
        </div>

        <div id="team" data-section="team">
            <TeamCardFive
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            team={[
              { id: "c1", name: "Chef Kenji", role: "Head Chef", imageSrc: "http://img.b2bpic.net/free-photo/lifestyle-people-learning-make-sushi_23-2149865319.jpg" },
              { id: "c2", name: "Chef Hana", role: "Sushi Master", imageSrc: "http://img.b2bpic.net/free-photo/crazy-chef-happy-expression_1194-1410.jpg" },
              { id: "c3", name: "Chef Sato", role: "Fusion Expert", imageSrc: "http://img.b2bpic.net/free-photo/dessert-glass-cup-served-with-tea_140725-8402.jpg" },
            ]}
            title="Ekipi ynë"
            description="Masterat e kuzhinës pas shijes suaj të preferuar."
          />
        </div>

        <div id="contact" data-section="contact">
            <ContactCTA
            useInvertedBackground={false}
            background={{ variant: "plain" }}
            tag="Kontakt"
            title="Rezervo tani"
            description="Na kontaktoni për çdo pyetje apo rezervim. Jemi gati t'ju shërbejmë."
            buttons={[
              { text: "WhatsApp na shkruani", href: "https://wa.me/355690000000" },
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <div className="aspect-video w-full mb-8 bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.364303496947!2d19.8170244766861!3d41.32750377130985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310f8c37d04b%3A0x277259f97658c148!2sTirana!5e0!3m2!1sen!2sal!4v1707252843051!5m2!1sen!2sal" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" />
          </div>
          <FooterSimple
            columns={[
              {
                title: "Lokacioni",                items: [{ label: "Tiranë, Shqipëri" }, { label: "Rruga e Kavajës" }]
              },
              {
                title: "Orari",                items: [{ label: "Hën-Prem: 10:00 - 23:00" }, { label: "Sht-Dje: 12:00 - 00:00" }]
              },
              {
                title: "Kontakt",                items: [{ label: "+355 69 000 0000" }, { label: "info@zenfusion.al" }]
              }
            ]}
            bottomLeftText="© 2024 Zen Fusion"
            bottomRightText="Industrial Aesthetic"
          />
          <a 
            href="https://wa.me/355690000000"
            className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
            aria-label="WhatsApp"
          >
            <MessageCircle size={32} />
          </a>
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}