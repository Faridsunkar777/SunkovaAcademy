import { Container } from "./shared";
import { LoginShowcase } from "./login-showcase";
import { LoginForm } from "./login-form";

export function LearnLoginPage() {
  return (
    <div className="min-h-[100svh] bg-[#F5F5F7] pt-28 pb-16 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <Container className="grid min-w-0 items-center gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:gap-14 xl:gap-20">
        <LoginShowcase />
        <LoginForm />
      </Container>
    </div>
  );
}
