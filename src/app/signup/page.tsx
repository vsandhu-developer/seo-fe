import { SignupForm } from "@/components/signup-form";

export default function Signup() {
  return (
    <div className="grid min-h-[80vh] lg:grid-cols-1">
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-xs">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
