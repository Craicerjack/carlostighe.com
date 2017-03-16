import { moduleForModel, test } from 'ember-qunit';

moduleForModel('marvel/character', 'Unit | Model | marvel/character', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
