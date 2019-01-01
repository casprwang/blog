const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default dt => `${MON[new Date(dt).getMonth()]} ${new Date(dt).getDate().toString().padStart(2, '0')}`
