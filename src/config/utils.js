import swal from "sweetalert";

export const alertFormValidation = (isValid) => {
    if (!isValid) {
        swal(
            'Warning',
            'Form belum lengkap, silahkan cek kembali form.',
            'warning'
        );
    }
};