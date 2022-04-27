let mySprite2 = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `, SpriteKind.Projectile)
mySprite2.setPosition(105, 107)
let mySprite = sprites.create(img`
    ........................
    ....ffffff..............
    ..ffeeeefef.............
    fffeeeefeeef............
    feeeeffeeeef............
    fffffeeeeeeef...........
    feeeeeffffeef...........
    fffffffeeefff...........
    ffeddd18ddef............
    feeddd18ddef............
    .f666ddddede............
    ..ff666666de............
    ...f666666ee............
    ...f888888f.............
    ...f888888f.............
    ....ffffff..............
    .....fff................
    .....eee................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setBounceOnWall(true)
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddd77dddddddddddddddddddddddddddddddddddddd77dddddddddddddddddddddddddddddddddddddd77dddddddddddddddddddddddddddddddddddddd77dddddddddddddddd
    ddddddddddddddddddddddd7ddddddddddddddddddddddddddddddddddddddd7ddddddddddddddddddddddddddddddddddddddd7ddddddddddddddddddddddddddddddddddddddd7dddddddddddddddd
    ddddddddddddddddddddd7777dddddddddddddddddddddddddddddddddddd7777dddddddddddddddddddddddddddddddddddd7777dddddddddddddddddddddddddddddddddddd7777ddddddddddddddd
    dddddddddddddddddddd77777ddddddddddddddddddddddddddddddddddd77777ddddddddddddddddddddddddddddddddddd77777ddddddddddddddddddddddddddddddddddd77777ddddddddddddddd
    ddddddddddddddddddd7777777ddddddddddddddddddddddddddddddddd7777777ddddddddddddddddddddddddddddddddd7777777ddddddddddddddddddddddddddddddddd7777777dddddddddddddd
    ddddddddddddddddddd77777d7ddddddddddddddddddddddddddddddddd77777d7ddddddddddddddddddddddddddddddddd77777d7ddddddddddddddddddddddddddddddddd77777d7dddddddddddddd
    ddddddddddddbddddddd7777ddddddddddddddddddddddddddddbddddddd7777ddddddddddddddddddddddddddddbddddddd7777ddddddddddddddddddddddddddddbddddddd7777dddddddddddddddd
    ddddddddddddbdddddd7777777ddddddddddddddddddddddddddbdddddd7777777ddddddddddddddddddddddddddbdddddd7777777ddddddddddddddddddddddddddbdddddd7777777dddddddddddddd
    ddddddddddddbddddd77777777ddddddddddddddddddddddddddbddddd77777777ddddddddddddddddddddddddddbddddd77777777ddddddddddddddddddddddddddbddddd77777777dddddddddddddd
    ddddddddddddbdddd77777777777ddddddddddddddddddddddddbdddd77777777777ddddddddddddddddddddddddbdddd77777777777ddddddddddddddddddddddddbdddd77777777777dddddddddddd
    dd77ddddddddbdd7d7777777777777ddddbddddddd77ddddddddbdd7d7777777777777ddddbddddddd77ddddddddbdd7d7777777777777ddddbddddddd77ddddddddbdd7d7777777777777ddddbddddd
    d77777ddddddbdd777777777777777ddddbdddddd77777ddddddbdd777777777777777ddddbdddddd77777ddddddbdd777777777777777ddddbdddddd77777ddddddbdd777777777777777ddddbddddd
    77777777ddddbddd77777777777777ddddbddddd77777777ddddbddd77777777777777ddddbddddd77777777ddddbddd77777777777777ddddbddddd77777777ddddbddd77777777777777ddddbddddd
    777777777ddddbdddd777777777777ddddbddddd777777777ddddbdddd777777777777ddddbddddd777777777ddddbdddd777777777777ddddbddddd777777777ddddbdddd777777777777ddddbddddd
    d77777777dddddbdddd7777777111111dbbdddd3d77777777dddddbdddd7777777111111dbbdddd3d77777777dddddbdddd7777777444444dbbdddd3d77777777dddddbdddd7777777111111dbbdddd3
    d777777777dddddbb7777777111111111bdddd3dd777777777dddddbb7777777111111111bdddd3dd777777777dddddbb7777777444444444bdddd3dd777777777dddddbb7777777111111111bdddd3d
    77777777ddddddddbb77777777117113bbdddddd77777777ddddddddbb77777777117113bbdddddd77777777ddddddddbb77777777447443bbdddddd77777777ddddddddbb77777777117113bbdddddd
    777777777dddddd777b777777717771bb3ddddd7777777777dddddd777b777777717771bb3ddddd7777777777dddddd777b777777747774bb3ddddd7777777777dddddd777b777777717771bb3ddddd7
    7777b77dddddd77777777777777777bbdddddd777777b77dddddd77777777777777777bbdddddd777777b77dddddd77777777777777777bbdddddd777777b77dddddd77777777777777777bbdddddd77
    7777b7777ddddd777777777777777bbddddddd777777b7777ddddd777777777777777bbddddddd777777b7777ddddd777777777777777bbddddddd777777b7777ddddd777777777777777bbddddddd77
    7777b77b77dddddd777711111777777ddddddd777777b77b77dddddd777711111777777ddddddd777777b77b77dddddd777711111777777ddddddd777777b77b77dddddd777711111777777ddddddd77
    7777b77b77ddddd31111111111777777777ddd777777b77b77ddddd31111111111777777777ddd777777b77b77ddddd31111111111777777777ddd777777b77b77ddddd31111111111777777777ddd77
    7777b7b777dddd111111111117711177777ddd777777b7b777dddd111111111117744477777ddd777777b7b777dddd111111111117744477777ddd777777b7b777dddd111111111117711177777ddd77
    7777bbb7447d3331111111111113111777ddddd77777bbb7447d3331111111111113444777ddddd77777bbb7447d3331111111111113444777ddddd77777bbb7447d3331111111111111111777ddddd7
    7777bb7447771111111111111111311177dddd777777bb7447771111111111111111344477dddd777777bb7447771111111111111111344477dddd777777bb7447771111111111111111311177dddd77
    777bb77777111111111111111111177777777777777bb77777111111111111111111177777777777777bb77777111111111111111111177777777777777bb77777111111111111111111177777777777
    77bb777711111111111111117bb777777777b77777bb777711111111111111117bb777777777b77777bb777711111111111111117bb777777777b77777bb777711111111111111117bb777777777b777
    77b7777477771113117113117bb777447777b77777b7777477771113117113117bb777447777b77777b7777477771113117113117bb777447777b77777b7777477771113117113117bb777447777b777
    77b7b77777711171177111777bb777b44777b77777b7b77777711171177111777bb777b44777b77777b7b77777711171177111777bb777b44777b77777b7b77777711171177111777bb777144777b777
    7bb7b77777717771777771777bb777b77777b7777bb7b77777717771777771777bb777b77777b7777bb7b77777717771777771777bb777b77777b7777bb7b77777717771777771777bb777177777b777
    7bbbb77777777477744777777bb777b777777b777bbbb77777777477744777777bb777b777777b777bbbb77777777477744777777bb777b777777b777bbbb77777777477744777777bb7771777777b77
    7bbb777777774477447777777bb777b777777b777bbb777777774477447777777bb777b777777b777bbb777777774477447777777bb777b777777b777bbb777777774477447777777bb7771777777b77
    7b777777777747777777b7777bb77b7777777bbb7b777777777747777777b7777bb77b7777777bbb7b777777777747777777b7777bb77b7777777bbb7b777777777747777777b7777bb77b7777777bbb
    bb777777777777777777b7777bbb7b777777777bbb777777777777777777b7777bbb7b777777777bbb777777777777777777b7777bbb7b777777777bbb777777777777777777b7777bbb7b777777777b
    3b777777777777777777b7777bbbb777777777777b777777777777777777b7777bbbb777777777777b777777777777777777b7777bbbb777777777777b777777777777777777b7777bbbb77777777777
    3b777777777777777777b7777bbbb777444777777b777777777777777777b7777bbbb777444777777b777777777777777777b7777bbbb777444777777b777777777777777777b7777bbbb77744477777
    3b111771117777777777b7777bbb7774447777777b111774447777777777b7777bbb7774447777777b111774447777777777b7777bbb7774447777777b111774447777777777b7777bbb777444777777
    11111177111777777777b7777bbb77444771111111111177444777777777b7777bbb77444771111111111177444777777777b7777bbb77444771111111111177444777777777b7777bbb774447711111
    11117777b11177777777b7777bbb77777111111111117777b44477777777b7777bbb77777111111111117777b44477777777b7777bbb77777111111111117777b44477777777b7777bbb777771111111
    11111117b77777777b77b7777bbb77771111111111111117b77777777b77b7777bbb77771111111111111117b77777777b77b7777bbb77771111111111111117b77777777b77b7777bbb777711111111
    11111111117777777b77b7777bbbb7111171111111111111117777777b77b7777bbbb7111171111111111111117777777b77b7777bbbb7111171111111111111117777777b77b7777bbbb71111711111
    11111711117777777b77b7777bbb1111b177117111111711117777777b77b7777bbb1111b177117111111711117777777b77b7777bbb1111b177117111111711117777777b77b7777bbb1111b1771171
    7111777bb3bb77777b77b7777bbbb111b77117777111777bb3bb77777b77b7777bbbb111b77117777111777bb7bb77777b77b7777bbbb111b77117777111777bb7bb77777b77b7777bbbb111b7711777
    77b1777bb3b777777bb7bb777bbbb777bb77777777b1777bb3b777777bb7bb777bbbb777bb77777777b1777bb7b777777bb7bb777bbbb777bb77777777b1777bb7b777777bb7bb777bbbb777bb777777
    77b7777bbbb7777777bbbb777bbbb777bb77777777b7777bbbb7777777bbbb777bbbb777bb77777777b7777bbbb7777777bbbb777bbbb777bb77777777b7777bbbb7777777bbbb777bbbb777bb777777
    77b7777bb7777777777bbb777bbbb777bb77777777b7777bb7777777777bbb777bbbb777bb77777777b7777bb7777777777bbb777bbbb777bb77777777b7777bb7777777777bbb777bbbb777bb777777
    77b7777bb77777777777bbb77bbbb777bb77777777b7777bb77777777777bbb77bbbb777bb77777777b7777bb77777777777bbb77bbbb777bb77777777b7777bb77777777777bbb77bbbb777bb777777
    777b777bb77777777777bbb77bbbb777bb777777777b777bb77777777777bbb77bbbb777bb777777777b777bb77777777777bbb77bbbb777bb777777777b777bb77777777777bbb77bbbb777bb777777
    777bb7bbb7777117111771b77bbbb777bb77b777777bb7bbb7777117111771b77bbbb777bb77b777777bb7bbb7777117111771b77bbbb777bb77b777777bb7bbb7777117111771b77bbbb777bb77b777
    777bbbbbb7771111111111117bbbbb77bb77b777777bbbbbb7771111111111117bbbbb77bb77b777777bbbbbb7771111111111117bbbbb77bb77b777777bbbbbb7771111111111117bbbbb77bb77b777
    7777bbbbb771111111111111bbbbbb7bb77bb7777777bbbbb771111111111111bbbbbb7bb77bb7777777bbbbb771111111111111bbbbbb7bb77bb7777777bbbbb771111111111111bbbbbb7bb77bb777
    77777bbbb777113111111171bbbbbb7bb77b777777777bbbb777113111111171bbbbbb7bb77b777777777bbbb777113111111171bbbbbb7bb77b777777777bbbb777113111111171bbbbbb7bb77b7777
    77777bbb7744771111117177bbbbbb7bb7b7777777777bbb7744771111117177bbbbbb7bb7b7777777777bbb7744771111117177bbbbbb7bb7b7777777777bbb7744771111117177bbbbbb7bb7b77777
    77777bbb7777711771177177bbbbbb7bbb77777777777bbb7777711771177177bbbbbb7bbb77777777777bbb7777711771177177bbbbbb7bbb77777777777bbb7777711771177177bbbbbb7bbb777777
    77777bbb777b7177777777777bbbbbbb7777777777777bbb777b7177777777777bbbbbbb7777777777777bbb777b7177777777777bbbbbbb7777777777777bbb777b7177777777777bbbbbbb77777777
    77777bbb777b7777777777777bbbbbbb7777777777777bbb777b7777777777777bbbbbbb7777777777777bbb777b7777777777777bbbbbbb7777777777777bbb777b7777777777777bbbbbbb77777777
    77777bbb777b7b77777777777bbbbbbb7777777777777bbb777b7b77777777777bbbbbbb7777777777777bbb777b7b77777777777bbbbbbb7777777777777bbb777b7b77777777777bbbbbbb77777777
    77777bbb777b7b77777777777bbbbbb77777777777777bbb777b7b77777777777bbbbbb77777777777777bbb777b7b77777777777bbbbbb77777777777777bbb777b7b77777777777bbbbbb777777777
    77777bbb777b7b77777777777bbbbb777777777777777bbb777b7b77777777777bbbbb777777777777777bbb777b7b77777777777bbbbb777777777777777bbb777b7b77777777777bbbbb7777777777
    77777bb7777bbb77777777777bbbbb777777777777777bb7777bbb77777777777bbbbb777777777777777bb7777bbb77777777777bbbbb777777777777777bb7777bbb77777777777bbbbb7777777777
    77777bb777bbb777777777777bbbbb777777777777777bb777bbb777777777777bbbbb777777777777777bb777bbb777777777777bbbbb777777777777777bb777bbb777777777777bbbbb7777777777
    7777bbb777b777777777dd777bbbbb7d777777777777bbb777b777777777dd777bbbbb7d777777777777bbb777b777777777dd777bbbbb7d777777777777bbb777b777777777dd777bbbbb7d77777777
    7777bbb777b7777777777dd7bbbbbb77dd7777d77777bbb777b7777777777dd7bbbbbb77dd7777d77777bbb777b7777777777dd7bbbbbb77dd7777d77777bbb777b7777777777dd7bbbbbb77dd7777d7
    7777bbb7bbb7777777777777bbbbbbb77d777dd77777bbb7bbb7777777777777bbbbbbb77d777dd77777bbb7bbb7777777777777bbbbbbb77d777dd77777bbb7bbb7777777777777bbbbbbb77d777dd7
    dd77bbbbbb77777777d77777bbbbbbb777777d77dd77bbbbbb77777777d77777bbbbbbb777777d77dd77bbbbbb77777777d77777bbbbbbb777777d77dd77bbbbbb77777777d77777bbbbbbb777777d77
    3dd7bbbbb77dd7777dd7777dbbbbbbbd777777777dd7bbbbb77dd7777dd7777dbbbbbbbd777777777dd7bbbbb77dd7777dd7777dbbbbbbbd777777777dd7bbbbb77dd7777dd7777dbbbbbbbd77777777
    3dddbbbbb777dd77dd77d7ddbbbbbbbd777d77777dddbbbbb777dd77dd77d7ddbbbbbbbd777d77777dddbbbbb777dd77dd77d7ddbbbbbbbd777d77777dddbbbbb777dd77dd77d7ddbbbbbbbd777d7777
    3dddbbb777777777d77dddddbbbbbbbdd7dd77d77dddbbb777777777d77dddddbbbbbbbdd7dd77d77dddbbb777777777d77dddddbbbbbbbdd7dd77d77dddbbb777777777d77dddddbbbbbbbdd7dd77d7
    ddddbbbd77777777777dddddbbbbbbbdddd77dddddddbbbd77777777777dddddbbbbbbbdddd77dddddddbbbd77777777777dddddbbbbbbbdddd77dddddddbbbd77777777777dddddbbbbbbbdddd77ddd
    ddddbbbd777d77ddd77dddddbbbbbbbdddddddddddddbbbd777d77ddd77dddddbbbbbbbdddddddddddddbbbd777d77ddd77dddddbbbbbbbdddddddddddddbbbd777d77ddd77dddddbbbbbbbddddddddd
    ddddbbbd77ddd7dddd7dddddbbbbbbbdddddddddddddbbbd77ddd7dddd7dddddbbbbbbbdddddddddddddbbbd77ddd7dddd7dddddbbbbbbbdddddddddddddbbbd77ddd7dddd7dddddbbbbbbbddddddddd
    ddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbddddddddd
    ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
    ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
    ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
    ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
    ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
    ddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbddddddddd
    ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
    ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
    ddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3dddddddd
    ddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3dddddddd
    ddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbdddddddd
    ddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbdddddddd
    113bbbbbbb3dddddddddddbbbbbbbb1111111111113bbbbbbb3dddddddddddbbbbbbbb1111111111113bbbbbbb3dddddddddddbbbbbbbb1111111111113bbbbbbb3dddddddddddbbbbbbbb1111111111
    11111111bbbddddddddd33bbb11111111111111111111111bbbddddddddd33bbb11111111111111111111111bbbddddddddd33bbb11111111111111111111111bbbddddddddd33bbb111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111171111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117111111111111
    1111111111111111111111111111111171111111111111111111111111111111111111111111111111111111111111171111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111e1111111111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111e111111111111111111e111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111171111111111111171111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111117111111111111111111111111171111111111111111111111111111111111111111111111111117111111111111111111111111111111111111111111e11111111111111111111111111
    1111111111111111111711111111111111111111111111111111111111111171111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111711111111111111111111111
    11111111111111111e11111111711111111111111111111111111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111
    `)
