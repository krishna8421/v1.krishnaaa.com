import Script, { ScriptProps } from "next/script";

export interface GoogleAnalyticsProps {
  measurementId: string;
  strategy?: ScriptProps["strategy"];
}

const GoogleAnalytics = ({
  measurementId,
  strategy = "afterInteractive",
}: GoogleAnalyticsProps) => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy={strategy}>
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${measurementId}');
                `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
