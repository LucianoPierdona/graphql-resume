import { queryType, idArg } from '@nexus/schema';
import { data } from 'src/data'
import { Bio, Position  } from './index';

export const Query = queryType({
    definition(t) {
        t.field("bio", {
            type: Bio,
            description: "find all the data in Bio",
            resolve: () => data.bio,
        });

        t.list.field("positions", {
            type: Position,
            description: "find a position by its date",
            resolve: () => data.positions,
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