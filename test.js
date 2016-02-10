import test from 'ava';
import m from './';

test(t => {
	t.same(m({a: 'foo'}, {a: 'bar'}, {b: 'foo'}), {a: ['foo', 'bar'], b: ['foo']});
	t.same(m({a: {b: 'foo'}}, {a: {b: 'bar'}}), {a: [{b: 'foo'}, {b: 'bar'}]});
	t.same(m({a: ['a', 'b'], b: 'foo'}, {a: ['a', 'b'], b: 'bar'}), {a: [['a', 'b'], ['a', 'b']], b: ['foo', 'bar']});
	t.same(m({a: [['a', 'b']]}, {a: [['a', 'b']]}, {a: [['a', 'b']]}), {a: [[['a', 'b']], [['a', 'b']], [['a', 'b']]]});
});
