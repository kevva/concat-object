import test from 'ava';
import m from '.';

test(t => {
	t.deepEqual(m({a: 'foo'}, {a: 'bar'}, {b: 'foo'}), {a: ['foo', 'bar'], b: ['foo']});
	t.deepEqual(m({a: {b: 'foo'}}, {a: {b: 'bar'}}), {a: [{b: 'foo'}, {b: 'bar'}]});
	t.deepEqual(m({a: ['a', 'b'], b: 'foo'}, {a: ['a', 'b'], b: 'bar'}), {a: [['a', 'b'], ['a', 'b']], b: ['foo', 'bar']});
	t.deepEqual(m({a: [['a', 'b']]}, {a: [['a', 'b']]}, {a: [['a', 'b']]}), {a: [[['a', 'b']], [['a', 'b']], [['a', 'b']]]});
});
