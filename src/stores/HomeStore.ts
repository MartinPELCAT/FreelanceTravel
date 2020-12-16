import { writable, derived } from "svelte/store";

type Dates = {
  start: Date;
  end: Date;
};

type Participants = {
  adults: number;
  childrens: number;
};

function createParticipantStore() {
  const { subscribe, update } = writable<Participants>({
    adults: 2,
    childrens: 4,
  });

  const incrementAdults = () => {
    update((val) => ({ ...val, adults: val.adults + 1 }));
  };
  const decrementAdults = () => {
    update((val) => ({ ...val, adults: val.adults - 1 }));
  };
  const incrementChildren = () => {
    update((val) => ({ ...val, childrens: val.childrens + 1 }));
  };
  const decrementChildren = () => {
    update((val) => ({ ...val, childrens: val.childrens - 1 }));
  };

  return {
    subscribe,
    incrementAdults,
    decrementAdults,
    incrementChildren,
    decrementChildren,
  };
}
export const participantStore = createParticipantStore();

export const locationStore = writable<string>(undefined);
export const datesStore = writable<Dates>(undefined);
