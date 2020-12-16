import { addDays } from "date-fns";
import { writable } from "svelte/store";

type Form = {
  location: string;
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
  location: "",
  dates: { start: new Date(), end: addDays(new Date(), 7) },
  participants: { adults: 2, childrens: 0 },
});
