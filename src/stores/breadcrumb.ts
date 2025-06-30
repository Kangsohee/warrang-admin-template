import { create } from 'zustand';

type HistoryType = { name: string; pathname: string };

type BreadcrumbStore = {
	histories: HistoryType[];
	updateHistories: (histories: HistoryType[]) => void;
};

export const useBreadcrumbStore = create<BreadcrumbStore>()((set) => ({
	histories: [],
	updateHistories: (histories) => set((state) => ({ ...state, histories })),
}));
