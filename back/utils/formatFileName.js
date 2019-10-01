function formatFileName(path) {
    let array = path.split('.');
    array[0] = array[0] + '_';
    array[1] = '.' + array[1];
    array.splice(1, 0, new Date().toISOString().split('T')[0]);
    return array.join('');
}

module.exports = formatFileName;