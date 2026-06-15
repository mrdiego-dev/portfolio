import type { Engine } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";

export async function registerParticles(engine: Engine): Promise<void> {
  await loadAll(engine);
}
