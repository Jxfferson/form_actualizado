export function showModal() {
    const modal = document.getElementById('modal-succes');
    modal.classList.remove('hidden');
}


export function hideModal() {
    const modal = document.getElementById('modal-succes');
    modal.classList.add('hidden');
}