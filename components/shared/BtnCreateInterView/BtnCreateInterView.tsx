import { FormCreateInterView } from "@/components/shared/FormCreateInterView";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const BtnCreateInterView = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" variant="outline">
          Crear nueva entrevista
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crear nueva entrevista</DialogTitle>
          <DialogDescription>Configura los detalles de tu entrevista y comienza cuando estés listo.</DialogDescription>
        </DialogHeader>
        <FormCreateInterView />
      </DialogContent>
    </Dialog>
  );
};
