import { queryType, idArg } from '@nexus/schema';
import { data } from 'src/data'
import { Bio, Position, Skills  } from './index';

export const Query = queryType({
    definition(t) {
        t.field("bio", {
            type: Bio,
            description: "Show the Biography",
            resolve: () => data.bio
        });

        t.list.field("skills", {
            type: Skills,
            description: "Show all the positions",
            resolve: () => data.skills
        });

        t.field("skill", {
            type: Skills,
            description: "Find a skill by its ID",
            nullable: true,
            args: { id: idArg() },
            resolve: (root, {id}: {id: string}, ctx) => data.skills.find(skills => skills.id === id)
        })

        t.list.field("positions", {
            type: Position,
            description: "Show all the positions",
            resolve: () => data.positions
        });

        t.field("position", {
            type: Position,
            description: "Find a position by its ID",
            nullable: true,
            args: { id: idArg() },
            resolve: (root, {id}: {id: string}, ctx) => data.positions.find(positions => positions.id === id)
        });
    },
});