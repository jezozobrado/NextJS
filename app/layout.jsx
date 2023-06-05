import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI prompts.",
};

const layout = () => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default layout;
