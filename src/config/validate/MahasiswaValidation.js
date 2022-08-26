const MahasiswaValidation = (values) => {
    const errors = {};

    if (!values.nama) {
        errors.nama = "Nama harus diisi";
    }
    if (!values.kelas) {
        errors.kelas = "Kelas harus diisi";
    }
    if (!values.jurusan) {
        errors.jurusan = "Jurusan harus diisi";
    }
    return errors;
};

export default MahasiswaValidation;

export const MahasiswaSyncErrors = (formMahasiswa) => {
    if (formMahasiswa) {
        if (formMahasiswa.syncErrors &&
            (formMahasiswa.syncErrors.nama ||
                formMahasiswa.syncErrors.kelas ||
                formMahasiswa.syncErrors.jurusan
            ))
            return false;
    }
    return true;
};