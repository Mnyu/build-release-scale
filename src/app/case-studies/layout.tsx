import { Layout, Navbar, Footer } from "nextra-theme-docs";
// import { Banner } from "nextra/components";
import { getPageMap } from "nextra/page-map";

interface Props {
  children: React.ReactNode;
}
// const banner = <Banner storageKey="some-key">BANNER</Banner>;
// const footer = <Footer>{new Date().getFullYear()} ©</Footer>;
const navbar = (
  <Navbar
    logo={<b>LOGO</b>}
    // projectLink="https://github.com/Mnyu"
    className=""
  />
);

const CaseStudiesLayout = async ({ children }: Props) => {
  const pageMap = await getPageMap("/case-studies");
  return (
    <main className="max-w-7xl mx-auto">
      <Layout
        navbar={navbar}
        pageMap={pageMap}
        darkMode={false}
        sidebar={{ toggleButton: false }}
        editLink={null}
        // banner={banner}
        feedback={{ content: null }}
        // footer={footer}
      >
        {children}
      </Layout>
    </main>
  );
};
export default CaseStudiesLayout;
