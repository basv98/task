import Swal from 'sweetalert2';

const Helper = {
    message(message, error = false) {
        Swal.fire({
            title: error ? "Fail" : "Congratulation",
            text: message,
            icon: error ? "error" : "success",
            confirmButtonText: 'Ok'
        })
    }
}

export default Helper;