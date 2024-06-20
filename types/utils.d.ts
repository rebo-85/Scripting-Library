/**
 * Forbids spawning of entities matching specified selectors.
 * @param selectorList An array of selectors specifying entities to forbid spawning.
 */
export function ForbidSpawn(selectorList: string[]): void;

/**
 * Creates and starts a new interval for executing a function repeatedly.
 * @param func The function to execute at each interval.
 * @param interval The interval in milliseconds between executions.
 */
export function runInterval(func: () => void, interval: number): RunInterval;

/**
 * Creates and starts a new timeout for executing a function after a specified delay.
 * @param func The function to execute after the timeout.
 * @param timeOut The timeout in milliseconds before executing the function.
 */
export function runTimeout(func: () => void, timeOut: number): RunTimeOut;

/**
 * Retrieves an objective from the scoreboard by ID.
 * @param id The ID of the objective to retrieve.
 */
export function getScoreboard(id: string): ScoreboardObjective;

/**
 * Adds a new objective to the scoreboard if it doesn't already exist.
 * @param id The ID of the objective to add.
 * @param displayName The display name of the objective (optional, defaults to ID).
 */
export function addScoreboard(id: string, displayName?: string): void;

/**
 * Removes an objective from the scoreboard by ID.
 * @param id The ID of the objective to remove.
 */
export function removeScoreboard(id: string): void;

/**
 * Adds a score to an objective for a participant (player or entity).
 * @param id The ID of the objective to update.
 * @param participant The participant (player ID or Entity object) to add score for.
 * @param score The score to add.
 */
export function addScore(id: string, participant: string | Entity, score: number): void;

/**
 * Retrieves the current score from an objective for a participant (player or entity).
 * @param id The ID of the objective to retrieve score from.
 * @param participant The participant (player ID or Entity object) to retrieve score for.
 */
export function getScore(id: string, participant: string | Entity): number;

/**
 * Sets the score for a participant (player or entity) in an objective.
 * @param id The ID of the objective to update score in.
 * @param participant The participant (player ID or Entity object) to set score for.
 * @param score The score to set.
 */
export function setScore(id: string, participant: string | Entity, score: number): void;

/**
 * Removes a participant (player or entity) from an objective's scores.
 * @param id The ID of the objective to remove participant from.
 * @param participant The participant (player ID or Entity object) to remove.
 */
export function removeParticipant(id: string, participant: string | Entity): void;

/**
 * Removes all participants (players or entities) from an objective's scores.
 * @param id The ID of the objective to remove all participants from.
 */
export function removeAllParticipant(id: string): void;

/**
 * Sends a message or logs a value depending on the type.
 * @param value The value to send or log.
 * @param type The type of operation ('chat', 'error', 'log'). Defaults to 'chat'.
 */
export function test(value: any, type?: "chat" | "error" | "log"): void;

/**
 * Retrieves the event source (block, entity, or NPC dialogue initiator) from a script event.
 * @param event The script event containing the source information.
 * @returns The source entity or undefined if not applicable.
 */
export function getScriptEventSource(event: ScriptEventCommandMessageAfterEvent): ScriptEventSource | undefined;

/**
 * Executes a function when a player loads into the world.
 * @param func The function to execute when a player loads.
 */
export function onPlayerLoad(func: (player: Player) => void): void;

/**
 * Executes a function when the world is opened (first player joins).
 * @param func The function to execute when the world opens.
 */
export function onWorldOpen(func: (player: Player) => void): void;

/**
 * Executes a function when the world is closed (last player leaves).
 * @param func The function to execute when the world closes.
 */
export function onWorldClose(func: (player: Player) => void): void;



















import { Dimension, Entity, Player, ScoreboardObjective } from "@minecraft/server";

/**
 * Constants for after-events, before-events, world, and dimensions.
 */
export const afterEvents: {
    playerJoin: {
        /**
         * Subscribe to player join events.
         * @param callback The callback function to execute on player join.
         */
        subscribe: (callback: (event: any) => void) => void;
    };
};

export const beforeEvents: {
    playerLeave: {
        /**
         * Subscribe to player leave events.
         * @param callback The callback function to execute on player leave.
         */
        subscribe: (callback: (event: any) => void) => void;
    };
};

export const world: {
    /**
     * Get all online players in the world.
     * @returns An array of Player objects representing all online players.
     */
    getAllPlayers: () => Player[];
    /**
     * Get a specific entity by player ID.
     * @param playerId The ID of the player entity to retrieve.
     * @returns The Entity object corresponding to the player ID.
     */
    getEntity: (playerId: string) => Entity;
    /**
     * Send a message to all players in the world.
     * @param message The message to send.
     */
    sendMessage: (message: string) => void;
};

export const overworld: Dimension;
export const nether: Dimension;
export const end: Dimension;

export const scoreboard: {
    /**
     * Get an objective from the scoreboard by ID.
     * @param id The ID of the objective to retrieve.
     * @returns The objective object corresponding to the ID.
     */
    getObjective: (id: string) => any;
    /**
     * Add a new objective to the scoreboard.
     * @param id The ID of the objective to add.
     * @param displayName The display name of the objective (optional, defaults to ID).
     * @returns The added objective object.
     */
    addObjective: (id: string, displayName?: string) => any;
    /**
     * Remove an objective from the scoreboard by ID.
     * @param id The ID of the objective to remove.
     * @returns True if the objective was successfully removed, false otherwise.
     */
    removeObjective: (id: string) => any;
};

// Classes.d.ts

// index.d.ts

import { Entity, Player, ScriptEvent } from "@minecraft/server";
import { RunInterval, RunTimeOut } from "./Classes";
import { afterEvents, beforeEvents, world, overworld, nether, end, scoreboard } from "./Constants";

