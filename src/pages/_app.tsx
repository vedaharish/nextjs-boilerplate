import { AppType } from "next/app";
import { withTRPC } from "@trpc/next";
import superjson from "superjson";
import { AppRouter } from "@/server/api/root";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    return {
      url: "/api/trpc",
      transformer: superjson,
    };
  },
  ssr: false,
})(MyApp);
