import { DollarOutlined, GithubOutlined } from "@ant-design/icons";

const MainFooter = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className=" py-4 ">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 mb-0">
          <div className="mb-4 md:mb-0 flex items-center space-x-3">
            <DollarOutlined className="text-white text-sm" />
          </div>
          <div className="flex items-center space-x-3">
            <p className="text-sm text-white mt-2 md:mt-0 ">
              &copy; {year} Money Mider. All rights reserved.
            </p>
            <a
              rel="noopener noreferrer"
              title="contribute"
              target="_blank"
              className="text-white hover:text-gray-300"
              href="https://github.com/ADHIL-MOHAMMED-P-N/moneyminder"
            >
              <GithubOutlined />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
