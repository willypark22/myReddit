import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from './mikro-orm.config';

const main = async () => {
    // Returns a promise so add await
    const orm = await MikroORM.init(microConfig);

    // This is equivalent to saying "new Post('my first post')"
    const post = orm.em.create(Post, { title: 'my first post' });

    // To insert posts into our database
    await orm.em.persistAndFlush(post);

    //Same thing as top, just outputting to see diff
    console.log("----------------sql2---------------");
    await orm.em.nativeInsert(Post, { title: 'my first post' });
}

main().catch((err) => {
    console.log(err);
});