export const mockAuth = {
  user: {
    id: 'u1',
    name: 'Papa Hanif',
    email: 'hanif@example.com',
    avatarUrl: 'https://picsum.photos/seed/papa/200',
  },
  profiles: [
    { id: 'p1', name: 'Andi', age: 4, avatarUrl: 'https://picsum.photos/seed/andi/200' },
    { id: 'p2', name: 'Siti', age: 6, avatarUrl: 'https://picsum.photos/seed/siti/200' },
  ]
}

export const mockLearning = {
  alphabet: [
    { letter: 'A', word: 'Apel', imageUrl: 'https://picsum.photos/seed/apple/400', audioUrl: '/audio/a.mp3' },
    { letter: 'B', word: 'Bola', imageUrl: 'https://picsum.photos/seed/ball/400', audioUrl: '/audio/b.mp3' },
    { letter: 'C', word: 'Cermin', imageUrl: 'https://picsum.photos/seed/mirror/400', audioUrl: '/audio/c.mp3' },
  ],
  stories: [
    {
      id: 's1',
      title: 'Kancil dan Buaya',
      pages: [
        { content: 'Suatu hari Kancil ingin menyeberang sungai...', imageUrl: 'https://picsum.photos/seed/river/800' },
        { content: 'Dia melihat buaya-buaya yang sedang lapar...', imageUrl: 'https://picsum.photos/seed/crocodile/800' },
        { content: 'Kancil punya ide cemerlang!', imageUrl: 'https://picsum.photos/seed/idea/800' },
      ]
    }
  ]
}

export const mockGamification = {
  achievements: [
    { title: 'Pembelajar Rajin', description: 'Belajar 7 hari berturut-turut', xp: 500 },
    { title: 'Jago Abjad', description: 'Selesaikan semua kartu abjad', xp: 200 },
  ],
  leaderboard: [
    { rank: 1, userId: 'u2', name: 'Budi', xp: 2500, avatarUrl: 'https://picsum.photos/seed/budi/200' },
    { rank: 2, userId: 'u1', name: 'Andi', xp: 1850, avatarUrl: 'https://picsum.photos/seed/andi/200', isCurrentUser: true },
    { rank: 3, userId: 'u3', name: 'Citra', xp: 1200, avatarUrl: 'https://picsum.photos/seed/citra/200' },
  ]
}

export const mockAdmin = {
  users: [
    { id: 'u1', name: 'Hanif', email: 'hanif@gmail.com', role: 'Admin', status: 'Active' },
    { id: 'u2', name: 'Budi', email: 'budi@gmail.com', role: 'User', status: 'Active' },
  ],
  stats: [
    { name: 'Sen', value: 400 },
    { name: 'Sel', value: 300 },
    { name: 'Rab', value: 600 },
    { name: 'Kam', value: 800 },
    { name: 'Jum', value: 500 },
    { name: 'Sab', value: 900 },
    { name: 'Min', value: 1000 },
  ]
}
