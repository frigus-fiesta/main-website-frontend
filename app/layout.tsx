import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Frigus Fiesta | Event Management & Live Entertainment in India",
  description:
    "Frigus Fiesta is a top-tier Indian event management company delivering unforgettable corporate events, weddings, live concerts, and social gatherings across cities like Pune, Hyderabad, Delhi, and Bangalore.",
  keywords:
    "Frigus Fiesta, event management India, wedding planners, corporate events, live concerts, party organizers, event decorators, social events, event planning India, Pune events, Hyderabad, Delhi, Bangalore, Electroplix",
  og: {
    title: "Frigus Fiesta | India's Premier Event Management Company",
    description:
      "Discover Frigus Fiesta's magic with stunning weddings, dynamic corporate events, and unforgettable live entertainment across India.",
    url: "https://www.frigusfiesta.com",
    type: "website",
    image: "/assets/frigusfiesta_og_image.png",
  },
  openGraph: {
    title: "Frigus Fiesta | India's Premier Event Management Company",
    description:
      "Discover Frigus Fiesta's magic with stunning weddings, dynamic corporate events, and unforgettable live entertainment across India.",
    url: "https://www.frigusfiesta.com",
    type: "website",
    siteName: "Frigus Fiesta",
    images: [
      {
        url: "/assets/frigusfiesta_og_image.png",
        width: 1200,
        height: 630,
        alt: "Frigus Fiesta Event Management & Entertainment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@FrigusFiesta",
    title: "Frigus Fiesta | India's Premier Event Management Company",
    description:
      "Frigus Fiesta creates unforgettable events — from corporate gatherings to music festivals and destination weddings across India.",
    image: "/assets/frigusfiesta_og_image.png",
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Frigus Fiesta",
    url: "https://www.frigusfiesta.com",
    logo: "https://www.frigusfiesta.com/assets/frigusfiesta_logo.png",
    sameAs: [
      "https://www.instagram.com/frigusfiesta",
      "https://www.facebook.com/frigusfiesta",
      "https://www.linkedin.com/company/frigusfiesta",
    ],
    description:
      "Frigus Fiesta is a premier Indian event management company known for crafting unforgettable experiences including weddings, live concerts, and high-end corporate events.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Available in Pune, Hyderabad, Delhi, and Bangalore",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@frigusfiesta.com",
      telephone: "+91-9182684160",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:image" content={metadata.og.image} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className={poppins.className}>
        <div>
          <main className="relative z-10 overflow-hidden">
            {children}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(){
                    if(!window.chatbase||window.chatbase("getState")!=="initialized"){
                      window.chatbase=(...args)=>{
                        if(!window.chatbase.q){window.chatbase.q=[]}
                        window.chatbase.q.push(args)
                      };
                      window.chatbase=new Proxy(window.chatbase,{
                        get(target,prop){
                          if(prop==="q"){return target.q}
                          return (...args)=>target(prop,...args)
                        }
                      })
                    }
                    const onLoad=function(){
                      const script=document.createElement("script");
                      script.src="https://www.chatbase.co/embed.min.js";
                      script.id="KK51L-QXHrFz0BfSB6aMJ";
                      script.domain="www.chatbase.co";
                      document.body.appendChild(script)
                    };
                    if(document.readyState==="complete"){
                      onLoad()
                    }else{
                      window.addEventListener("load",onLoad)
                    }
                  })();
                `,
              }}
            />
          </main>
        </div>
      </body>
    </html>
  );
}
