import Form from "next/form";
import { deleteProduct } from "../../lib/data/product";
import { revalidatePath } from "next/cache";

export default function DeleteButton({ productId }: { productId: number }) {
  return (
    <Form
      action={async () => {
        "use server";
        await deleteProduct(productId);
        revalidatePath("/");
      }}>
      <button
        type="submit"
        className="border rounded px-2 h-min bg-destructive text-background font-bold">
        Delete
      </button>
    </Form>
  );
}
