"use client";

import React, { startTransition } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteEvent } from "@/lib/actions/event.action";
import { useRouter } from "next/navigation";

type DeleteProps = {
  eventId: string;
};

const Delete = ({ eventId }: DeleteProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    const deletedEvent = await deleteEvent(eventId);
    if (deletedEvent?.status === 200) {
      router.push("/events");
      return;
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="font-bold py-2 rounded-md border text-md px-8 text-red border-red-300 text-red-600 hover:bg-red-100 hover:text-red-700">
        Delete
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-4">
            Are you sure you want to delete this event?
          </AlertDialogTitle>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() =>
              startTransition(() => {
                handleDelete();
                return undefined;
              })
            }
            className="bg-red-500 hover:bg-red-600 font-semibold text-white"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Delete;
