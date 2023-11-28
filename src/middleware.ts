import withAuth from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
});

export const config = {
  // restricted routes
  matcher: ["/dashboard"],
};
