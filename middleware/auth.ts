export default defineNuxtRouteMiddleware((_to, _from) => {
  const { userAuth } = useAuthState();

  if (!userAuth.value) navigateTo("/");
});
