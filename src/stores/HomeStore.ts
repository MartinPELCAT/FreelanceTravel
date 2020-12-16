import { addDays } from "date-fns";
import { writable } from "svelte/store";

type Form = {
  place: string;
  dates: {
    start: Date;
    end: Date;
  };
  participants: {
    adults: number;
    childrens: number;
  };
};

export const homeStore = writable<Form>({
  place: "",
  dates: { start: new Date(), end: addDays(new Date(), 7) },
  participants: { adults: 2, childrens: 0 },
});
