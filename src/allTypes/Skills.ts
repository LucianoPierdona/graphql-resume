import { objectType } from '@nexus/schema';

export const Skills = objectType({
    name: "Skills",
    definition(t) {
        t.id("id");
        t.string("name");
    },
});
