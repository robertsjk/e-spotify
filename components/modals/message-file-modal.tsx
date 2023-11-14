"use client";
<<<<<<< HEAD
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { useForm } from "react-hook-form";
=======

import { useModal } from "@/hooks/use-modal-store";
>>>>>>> v-2
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
<<<<<<< HEAD
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Button } from "../ui/button";
import FileUpload from "../file-upload";
import { useRouter } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";
import { useModal } from "@/hooks/use-modal-store";
import qs from "query-string";
=======
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import qs from "query-string";
import axios from "axios";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import FileUpload from "../file-upload";
import { Button } from "../ui/button";
>>>>>>> v-2

const formSchema = z.object({
  fileUrl: z.string().min(1, {
    message: "Attachment is required",
  }),
});

<<<<<<< HEAD
export const MessageFileModal = () => {
=======
const MessageFileModal = () => {
>>>>>>> v-2
  const {
    isOpen,
    onClose,
    type,
    data: { apiUrl, query },
  } = useModal();
  const router = useRouter();

  const isModalOpen = isOpen && type === "messageFile";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fileUrl: "",
    },
  });

<<<<<<< HEAD
=======
  const isLoading = form.formState.isSubmitting;

>>>>>>> v-2
  const handleClose = () => {
    form.reset();
    onClose();
  };

<<<<<<< HEAD
  const isLoading = form.formState.isSubmitting;

=======
>>>>>>> v-2
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const url = qs.stringifyUrl({
        url: apiUrl || "",
        query,
      });

<<<<<<< HEAD
=======
      console.log(url);

>>>>>>> v-2
      await axios.post(url, { ...values, content: values.fileUrl });

      form.reset();
      router.refresh();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
<<<<<<< HEAD
      <DialogContent className="bg-white text-black p-0 overflow-hidden rounded-md">
        <div className="text-xs absolute top-1 left-1">
          <SignOutButton>sign out</SignOutButton>
        </div>
=======
      <DialogContent className="bg-white  text-black p-0 overflow-hidden rounded-md">
>>>>>>> v-2
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Add an attachment
          </DialogTitle>
<<<<<<< HEAD
          <DialogDescription className="text-center text-zinc-500">
=======
          <DialogDescription className="text-center text-stone-600">
>>>>>>> v-2
            Send a file as a message
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
              <div className="flex items-center justify-center text-center">
                <FormField
                  control={form.control}
                  name="fileUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FileUpload
                          endpoint="messageFile"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
<<<<<<< HEAD
            <DialogFooter className="bg-gray-100 px-6 py-4">
=======
            <DialogFooter className="px-6 py-4">
>>>>>>> v-2
              <Button disabled={isLoading} variant="primary">
                Send
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
<<<<<<< HEAD
=======

export default MessageFileModal;
>>>>>>> v-2
