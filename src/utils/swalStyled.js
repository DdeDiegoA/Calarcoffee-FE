import Swal from 'sweetalert2';

export const swalStyled = Swal.mixin({
  customClass: {
    confirmButton: 'swal_confirm-btn',
    cancelButton: 'swal_cancel-btn',
  },
  buttonsStyling: false,
});
