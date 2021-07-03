import Script from "next/script"

const ThirdParties = () => {
  return (
    <>
      {/** gtag for GA */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-78ZSGYCB6S" />
      <Script src="/scripts/gtag.js" strategy="lazyOnload" />
    </>
  )
}

export default ThirdParties
