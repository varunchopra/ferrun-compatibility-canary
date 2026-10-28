// Copyright (c) 2026 Ferrun contributors. All rights reserved.
//
// Responsibility: Assert action Node identity and state transfer between main and
// post.
// Connections: node-probe/action.yml runs this body on both candidate and official
// runners in live qualification.

const assert = require('node:assert/strict'); // Use the executing interpreter's standard library as the independent assertion mechanism.
const fs = require('node:fs'); // Use the real action state channel to distinguish main from post.
assert.equal(process.versions.node.split('.')[0], '24'); // The action runtime must remain Node 24 after setup-node changes the project's PATH.
if (process.env.STATE_phase === 'post') {
  // The runner must restore state from main before invoking the actual post hook.
  console.log('ACTION_NODE_POST=24'); // Give the independent verifier a deterministic post-runtime observation.
} else {
  // The main action establishes state using the standard file-command protocol.
  fs.appendFileSync(process.env.GITHUB_STATE, 'phase=post\n'); // Preserve the phase through the runner's production state implementation.
  console.log('ACTION_NODE_MAIN=24'); // Prove the main entrypoint used the declared runtime as well.
} // No repository API or dependency installation is needed for this probe.
