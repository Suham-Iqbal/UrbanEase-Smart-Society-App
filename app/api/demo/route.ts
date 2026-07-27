import { NextResponse } from "next/server";
import { demoSchema } from "@/lib/validations/demo";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const result = demoSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          message: "Please review the form and complete all required fields.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        message:
          "Thanks — your demo request has been received. Our team will contact you shortly.",
        reference: `UE-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { message: "We could not process this request. Please try again." },
      { status: 500 },
    );
  }
}
