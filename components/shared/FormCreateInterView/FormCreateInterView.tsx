"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { difficulties, roles } from "./FormCreateInterView.data";

export const FormCreateInterView = () => {
  const [interviewName, setInterviewName] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [errors, setErrors] = useState<{ name?: string; role?: string; difficulty?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; role?: string; difficulty?: string } = {};

    if (interviewName.trim().length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres.";
    }
    if (interviewName.trim().length > 64) {
      newErrors.name = "El nombre no puede superar los 64 caracteres.";
    }
    if (!selectedRole) {
      newErrors.role = "Selecciona un rol para la entrevista.";
    }
    if (!selectedDifficulty) {
      newErrors.difficulty = "Selecciona un nivel de dificultad.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    console.log({ interviewName, selectedRole, selectedDifficulty });
    // TODO: lógica para comenzar la entrevista
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="interview-name">Nombre de la entrevista</Label>
        <Input
          id="interview-name"
          placeholder="Ej: Entrevista Frontend Senior"
          value={interviewName}
          onChange={(e) => setInterviewName(e.target.value)}
        />
        {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="role-select">Rol</Label>
        <Select value={selectedRole} onValueChange={setSelectedRole}>
          <SelectTrigger id="role-select" className="w-full">
            <SelectValue placeholder="Selecciona un rol" />
          </SelectTrigger>
          <SelectContent>
            {roles.map((role) => (
              <SelectItem key={role.value} value={role.value}>
                {role.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.role && <p className="text-destructive text-sm">{errors.role}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="difficulty-select">Nivel de dificultad</Label>
        <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
          <SelectTrigger id="difficulty-select" className="w-full">
            <SelectValue placeholder="Selecciona la dificultad" />
          </SelectTrigger>
          <SelectContent>
            {difficulties.map((diff) => (
              <SelectItem key={diff.value} value={diff.value}>
                {diff.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.difficulty && <p className="text-destructive text-sm">{errors.difficulty}</p>}
      </div>

      <Button type="submit" className="w-full mt-2">
        Comenzar entrevista
      </Button>
    </form>
  );
};
