import { writable } from 'svelte/store';

const MAX_MONTH = 12;
const MIN_MONTH = 1;

function nomalize_month(month: number): number {
    if (month > MAX_MONTH) {
        return MAX_MONTH;
    }
    if (month < MIN_MONTH) {
        return MIN_MONTH;
    }
    return month;
}

function create_current_month() {
    const now_month: number = new Date().getMonth() + 1
    const { subscribe, set, update } = writable(now_month);

    return {
        subscribe,
        set: () => update((n) => nomalize_month(n)),
        increse: () => update((n) => nomalize_month(n + 1)),
        decrese: () => update((n) => nomalize_month(n - 1))
    }
};

export const current_month = create_current_month();