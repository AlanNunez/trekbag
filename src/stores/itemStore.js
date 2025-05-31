import { create } from 'zustand';

create(() => ( {
    items: initialItems,
    handleRemoveItem: (id) => {
        set((state) => ({
            items: state.items.filter(item => item.id !== id)
        }));
    }
} ));